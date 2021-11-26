# KeyAccessJustifications


```text
gcp/Item/IdentitySecurity/KeyAccessJustifications
```

```text
include('gcp/Item/IdentitySecurity/KeyAccessJustifications')
```



| Illustration | KeyAccessJustifications | KeyAccessJustificationsCard | KeyAccessJustificationsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../gcp/Item/IdentitySecurity/KeyAccessJustifications.png) | ![illustration for KeyAccessJustifications](../../../gcp/Item/IdentitySecurity/KeyAccessJustifications.Local.png) | ![illustration for KeyAccessJustificationsCard](../../../gcp/Item/IdentitySecurity/KeyAccessJustificationsCard.Local.png) | ![illustration for KeyAccessJustificationsGroup](../../../gcp/Item/IdentitySecurity/KeyAccessJustificationsGroup.Local.png) |




## KeyAccessJustifications

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element KeyAccessJustifications
include('gcp/Item/IdentitySecurity/KeyAccessJustifications')

' renders the element
KeyAccessJustifications('KeyAccessJustifications', 'Key Access Justifications', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element KeyAccessJustifications
include('gcp/Item/IdentitySecurity/KeyAccessJustifications')

' renders the element
KeyAccessJustifications('KeyAccessJustifications', 'Key Access Justifications', 'an optional tech label')
@enduml
```

## KeyAccessJustificationsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element KeyAccessJustificationsCard
include('gcp/Item/IdentitySecurity/KeyAccessJustifications')

' renders the element
KeyAccessJustificationsCard('KeyAccessJustificationsCard', 'Key Access Justifications Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element KeyAccessJustificationsCard
include('gcp/Item/IdentitySecurity/KeyAccessJustifications')

' renders the element
KeyAccessJustificationsCard('KeyAccessJustificationsCard', 'Key Access Justifications Card', 'an optional description')
@enduml
```

## KeyAccessJustificationsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element KeyAccessJustificationsGroup
include('gcp/Item/IdentitySecurity/KeyAccessJustifications')

' renders the element
KeyAccessJustificationsGroup('KeyAccessJustificationsGroup', 'Key Access Justifications Group', 'an optional tech label') {
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

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element KeyAccessJustificationsGroup
include('gcp/Item/IdentitySecurity/KeyAccessJustifications')

' renders the element
KeyAccessJustificationsGroup('KeyAccessJustificationsGroup', 'Key Access Justifications Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

