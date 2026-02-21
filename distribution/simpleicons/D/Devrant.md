# Devrant


```text
simpleicons/D/Devrant
```

```text
include('simpleicons/D/Devrant')
```



| Illustration | Devrant |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Devrant.png) | ![illustration for Devrant](../../simpleicons/D/Devrant.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DevrantXs>`
- `<$DevrantSm>`
- `<$DevrantMd>`
- `<$DevrantLg>`





## Devrant

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Devrant
include('simpleicons/D/Devrant')

' renders the element
Devrant('Devrant', 'Devrant', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Devrant
include('simpleicons/D/Devrant')

' renders the element
Devrant('Devrant', 'Devrant', 'an optional tech label', 'an optional description')
@enduml
```

