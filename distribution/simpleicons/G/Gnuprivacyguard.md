# Gnuprivacyguard


```text
simpleicons/G/Gnuprivacyguard
```

```text
include('simpleicons/G/Gnuprivacyguard')
```



| Illustration | Gnuprivacyguard |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Gnuprivacyguard.png) | ![illustration for Gnuprivacyguard](../../simpleicons/G/Gnuprivacyguard.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GnuprivacyguardXs>`
- `<$GnuprivacyguardSm>`
- `<$GnuprivacyguardMd>`
- `<$GnuprivacyguardLg>`





## Gnuprivacyguard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gnuprivacyguard
include('simpleicons/G/Gnuprivacyguard')

' renders the element
Gnuprivacyguard('Gnuprivacyguard', 'Gnuprivacyguard', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gnuprivacyguard
include('simpleicons/G/Gnuprivacyguard')

' renders the element
Gnuprivacyguard('Gnuprivacyguard', 'Gnuprivacyguard', 'an optional tech label', 'an optional description')
@enduml
```

