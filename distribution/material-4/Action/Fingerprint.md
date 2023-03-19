# Fingerprint


```text
material-4/Action/Fingerprint
```

```text
include('material-4/Action/Fingerprint')
```



| Illustration | Fingerprint |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Fingerprint.png) | ![illustration for Fingerprint](../../material-4/Action/Fingerprint.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FingerprintXs>`
- `<$FingerprintSm>`
- `<$FingerprintMd>`
- `<$FingerprintLg>`





## Fingerprint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Fingerprint
include('material-4/Action/Fingerprint')

' renders the element
Fingerprint('Fingerprint', 'Fingerprint', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Fingerprint
include('material-4/Action/Fingerprint')

' renders the element
Fingerprint('Fingerprint', 'Fingerprint', 'an optional tech label', 'an optional description')
@enduml
```

