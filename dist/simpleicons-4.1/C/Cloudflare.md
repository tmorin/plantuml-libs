# Cloudflare

```text
simpleicons-4.1/C/Cloudflare
```

```text
include('simpleicons-4.1/C/Cloudflare')
```

|icon|element|
|---|---|
|![](Cloudflare.png)|![](Cloudflare.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the simpleicons-4.1 bootstrap
include('simpleicons-4.1/bootstrap')
' loads the Cloudflare element
include('simpleicons-4.1/C/Cloudflare')
Cloudflare('cloudflare', 'Cloudflare', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the simpleicons-4.1 bootstrap
include('simpleicons-4.1/bootstrap')
' loads the Cloudflare element
include('simpleicons-4.1/C/Cloudflare')
Cloudflare('cloudflare', 'Cloudflare', 'an optional tech field')
@enduml
```

