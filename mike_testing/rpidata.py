import socket

def rpi():
	s=socket.socket(socket.AF_INET,socket.SOCK_STREAM)
	s.bind(("159.203.78.94",12345))
	s.listen(5)
	c=s.accept()

	datfile=open("/var/www/html/weather/Dataview_Project/mike_testing/rpidata.txt","a")

	print("client is connected")

	while True:
		b=c[0].recv(1)
		print(b)
		datfile.write(b.decode())
		datfile.flush()

rpi()
