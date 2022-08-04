# Googledomains


```text
simpleicons-7/G/Googledomains
```

```text
include('simpleicons-7/G/Googledomains')
```



| Illustration | Googledomains |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Googledomains.png) | ![illustration for Googledomains](../../simpleicons-7/G/Googledomains.Local.png) |




## Googledomains

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Googledomains
include('simpleicons-7/G/Googledomains')

' renders the element
Googledomains('Googledomains', 'Googledomains', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googledomains
include('simpleicons-7/G/Googledomains')

' renders the element
Googledomains('Googledomains', 'Googledomains', 'an optional tech label', 'an optional description')
@enduml
```

