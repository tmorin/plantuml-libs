# Tryhackme


```text
simpleicons-8/T/Tryhackme
```

```text
include('simpleicons-8/T/Tryhackme')
```



| Illustration | Tryhackme |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Tryhackme.png) | ![illustration for Tryhackme](../../simpleicons-8/T/Tryhackme.Local.png) |




## Tryhackme

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Tryhackme
include('simpleicons-8/T/Tryhackme')

' renders the element
Tryhackme('Tryhackme', 'Tryhackme', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Tryhackme
include('simpleicons-8/T/Tryhackme')

' renders the element
Tryhackme('Tryhackme', 'Tryhackme', 'an optional tech label', 'an optional description')
@enduml
```

