# Onlyfans


```text
simpleicons-5/O/Onlyfans
```

```text
include('simpleicons-5/O/Onlyfans')
```



| Illustration | Onlyfans |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/O/Onlyfans.png) | ![illustration for Onlyfans](../../simpleicons-5/O/Onlyfans.Local.png) |




## Onlyfans

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Onlyfans
include('simpleicons-5/O/Onlyfans')

' renders the element
Onlyfans('Onlyfans', 'Onlyfans', 'an optional tech label')
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

' loads the Item which embeds the element Onlyfans
include('simpleicons-5/O/Onlyfans')

' renders the element
Onlyfans('Onlyfans', 'Onlyfans', 'an optional tech label')
@enduml
```

