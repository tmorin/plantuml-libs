# Key Access Justifications

```text
gcp/Item/IdentitySecurity/KeyAccessJustifications
```

```text
include('gcp/Item/IdentitySecurity/KeyAccessJustifications')
```

|icon|card|element|group|
|---|---|---|---|
|![](KeyAccessJustifications.png)|![](KeyAccessJustifications.card.png)|![](KeyAccessJustifications.element.png)|![](KeyAccessJustifications.group.png)|



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
' loads the KeyAccessJustifications element
include('gcp/Item/IdentitySecurity/KeyAccessJustifications')
KeyAccessJustificationsCard('key_access_justifications', 'Key Access Justifications', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the KeyAccessJustifications element
include('gcp/Item/IdentitySecurity/KeyAccessJustifications')
KeyAccessJustificationsCard('key_access_justifications', 'Key Access Justifications', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the KeyAccessJustifications element
include('gcp/Item/IdentitySecurity/KeyAccessJustifications')
KeyAccessJustifications('key_access_justifications', 'Key Access Justifications', 'an optional tech field')
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
' loads the KeyAccessJustifications element
include('gcp/Item/IdentitySecurity/KeyAccessJustifications')
KeyAccessJustifications('key_access_justifications', 'Key Access Justifications', 'an optional tech field')
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
' loads the KeyAccessJustifications element
include('gcp/Item/IdentitySecurity/KeyAccessJustifications')
KeyAccessJustificationsGroup('key_access_justifications', 'Key Access Justifications', 'an optional tech field'){
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
' loads the KeyAccessJustifications element
include('gcp/Item/IdentitySecurity/KeyAccessJustifications')
KeyAccessJustificationsGroup('key_access_justifications', 'Key Access Justifications', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

