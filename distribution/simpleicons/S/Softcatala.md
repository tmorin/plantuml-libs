# Softcatala


```text
simpleicons/S/Softcatala
```

```text
include('simpleicons/S/Softcatala')
```



| Illustration | Softcatala |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Softcatala.png) | ![illustration for Softcatala](../../simpleicons/S/Softcatala.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SoftcatalaXs>`
- `<$SoftcatalaSm>`
- `<$SoftcatalaMd>`
- `<$SoftcatalaLg>`





## Softcatala

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Softcatala
include('simpleicons/S/Softcatala')

' renders the element
Softcatala('Softcatala', 'Softcatala', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Softcatala
include('simpleicons/S/Softcatala')

' renders the element
Softcatala('Softcatala', 'Softcatala', 'an optional tech label', 'an optional description')
@enduml
```

