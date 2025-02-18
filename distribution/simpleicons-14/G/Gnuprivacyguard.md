# Gnuprivacyguard


```text
simpleicons-14/G/Gnuprivacyguard
```

```text
include('simpleicons-14/G/Gnuprivacyguard')
```



| Illustration | Gnuprivacyguard |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Gnuprivacyguard.png) | ![illustration for Gnuprivacyguard](../../simpleicons-14/G/Gnuprivacyguard.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Gnuprivacyguard
include('simpleicons-14/G/Gnuprivacyguard')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Gnuprivacyguard
include('simpleicons-14/G/Gnuprivacyguard')

' renders the element
Gnuprivacyguard('Gnuprivacyguard', 'Gnuprivacyguard', 'an optional tech label', 'an optional description')
@enduml
```

