# Igloo


```text
fontawesome/Solid/Igloo
```

```text
include('fontawesome/Solid/Igloo')
```



| Illustration | Igloo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Igloo.png) | ![illustration for Igloo](../../fontawesome/Solid/Igloo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IglooXs>`
- `<$IglooSm>`
- `<$IglooMd>`
- `<$IglooLg>`





## Igloo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Igloo
include('fontawesome/Solid/Igloo')

' renders the element
Igloo('Igloo', 'Igloo', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Igloo
include('fontawesome/Solid/Igloo')

' renders the element
Igloo('Igloo', 'Igloo', 'an optional tech label', 'an optional description')
@enduml
```

