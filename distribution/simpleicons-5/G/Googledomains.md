# Googledomains


```text
simpleicons-5/G/Googledomains
```

```text
include('simpleicons-5/G/Googledomains')
```



| Illustration | Googledomains |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Googledomains.png) | ![illustration for Googledomains](../../simpleicons-5/G/Googledomains.Local.png) |




## Googledomains

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Googledomains
include('simpleicons-5/G/Googledomains')

' renders the element
Googledomains('Googledomains', 'Googledomains', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Googledomains
include('simpleicons-5/G/Googledomains')

' renders the element
Googledomains('Googledomains', 'Googledomains', 'an optional tech label')
@enduml
```

