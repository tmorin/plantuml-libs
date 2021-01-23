# Web Security Scanner

```text
gcp/Item/IdentitySecurity/WebSecurityScanner
```

```text
include('gcp/Item/IdentitySecurity/WebSecurityScanner')
```

|icon|card|element|group|
|---|---|---|---|
|![](WebSecurityScanner.png)|![](WebSecurityScanner.card.png)|![](WebSecurityScanner.element.png)|![](WebSecurityScanner.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the WebSecurityScanner element
include('gcp/Item/IdentitySecurity/WebSecurityScanner')
WebSecurityScannerCard('web_security_scanner', 'Web Security Scanner', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the WebSecurityScanner element
include('gcp/Item/IdentitySecurity/WebSecurityScanner')
WebSecurityScannerCard('web_security_scanner', 'Web Security Scanner', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the WebSecurityScanner element
include('gcp/Item/IdentitySecurity/WebSecurityScanner')
WebSecurityScanner('web_security_scanner', 'Web Security Scanner', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the WebSecurityScanner element
include('gcp/Item/IdentitySecurity/WebSecurityScanner')
WebSecurityScanner('web_security_scanner', 'Web Security Scanner', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the WebSecurityScanner element
include('gcp/Item/IdentitySecurity/WebSecurityScanner')
WebSecurityScannerGroup('web_security_scanner', 'Web Security Scanner', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the WebSecurityScanner element
include('gcp/Item/IdentitySecurity/WebSecurityScanner')
WebSecurityScannerGroup('web_security_scanner', 'Web Security Scanner', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

