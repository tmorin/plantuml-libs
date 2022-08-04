# Gnuprivacyguard


```text
simpleicons-7/G/Gnuprivacyguard
```

```text
include('simpleicons-7/G/Gnuprivacyguard')
```



| Illustration | Gnuprivacyguard |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Gnuprivacyguard.png) | ![illustration for Gnuprivacyguard](../../simpleicons-7/G/Gnuprivacyguard.Local.png) |




## Gnuprivacyguard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Gnuprivacyguard
include('simpleicons-7/G/Gnuprivacyguard')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Gnuprivacyguard
include('simpleicons-7/G/Gnuprivacyguard')

' renders the element
Gnuprivacyguard('Gnuprivacyguard', 'Gnuprivacyguard', 'an optional tech label', 'an optional description')
@enduml
```

