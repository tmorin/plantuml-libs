# Fingerprint


```text
fontawesome-6/Solid/Fingerprint
```

```text
include('fontawesome-6/Solid/Fingerprint')
```



| Illustration | Fingerprint |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Fingerprint.png) | ![illustration for Fingerprint](../../fontawesome-6/Solid/Fingerprint.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Fingerprint
include('fontawesome-6/Solid/Fingerprint')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Fingerprint
include('fontawesome-6/Solid/Fingerprint')

' renders the element
Fingerprint('Fingerprint', 'Fingerprint', 'an optional tech label', 'an optional description')
@enduml
```

