# Onlyfans


```text
simpleicons-6/O/Onlyfans
```

```text
include('simpleicons-6/O/Onlyfans')
```



| Illustration | Onlyfans |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/O/Onlyfans.png) | ![illustration for Onlyfans](../../simpleicons-6/O/Onlyfans.Local.png) |




## Onlyfans

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Onlyfans
include('simpleicons-6/O/Onlyfans')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Onlyfans
include('simpleicons-6/O/Onlyfans')

' renders the element
Onlyfans('Onlyfans', 'Onlyfans', 'an optional tech label')
@enduml
```

