# WebSecurityScanner


```text
gcp/Item/IdentitySecurity/WebSecurityScanner
```

```text
include('gcp/Item/IdentitySecurity/WebSecurityScanner')
```



| Illustration | WebSecurityScanner | WebSecurityScannerCard | WebSecurityScannerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../gcp/Item/IdentitySecurity/WebSecurityScanner.png) | ![illustration for WebSecurityScanner](../../../gcp/Item/IdentitySecurity/WebSecurityScanner.Local.png) | ![illustration for WebSecurityScannerCard](../../../gcp/Item/IdentitySecurity/WebSecurityScannerCard.Local.png) | ![illustration for WebSecurityScannerGroup](../../../gcp/Item/IdentitySecurity/WebSecurityScannerGroup.Local.png) |




## WebSecurityScanner

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element WebSecurityScanner
include('gcp/Item/IdentitySecurity/WebSecurityScanner')

' renders the element
WebSecurityScanner('WebSecurityScanner', 'Web Security Scanner', 'an optional tech label')
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

' loads the Item which embeds the element WebSecurityScanner
include('gcp/Item/IdentitySecurity/WebSecurityScanner')

' renders the element
WebSecurityScanner('WebSecurityScanner', 'Web Security Scanner', 'an optional tech label')
@enduml
```

## WebSecurityScannerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element WebSecurityScannerCard
include('gcp/Item/IdentitySecurity/WebSecurityScanner')

' renders the element
WebSecurityScannerCard('WebSecurityScannerCard', 'Web Security Scanner Card', 'an optional description')
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

' loads the Item which embeds the element WebSecurityScannerCard
include('gcp/Item/IdentitySecurity/WebSecurityScanner')

' renders the element
WebSecurityScannerCard('WebSecurityScannerCard', 'Web Security Scanner Card', 'an optional description')
@enduml
```

## WebSecurityScannerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element WebSecurityScannerGroup
include('gcp/Item/IdentitySecurity/WebSecurityScanner')

' renders the element
WebSecurityScannerGroup('WebSecurityScannerGroup', 'Web Security Scanner Group', 'an optional tech label') {
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

' loads the Item which embeds the element WebSecurityScannerGroup
include('gcp/Item/IdentitySecurity/WebSecurityScanner')

' renders the element
WebSecurityScannerGroup('WebSecurityScannerGroup', 'Web Security Scanner Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

