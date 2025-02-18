# Dribbble


```text
simpleicons-14/D/Dribbble
```

```text
include('simpleicons-14/D/Dribbble')
```



| Illustration | Dribbble |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Dribbble.png) | ![illustration for Dribbble](../../simpleicons-14/D/Dribbble.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DribbbleXs>`
- `<$DribbbleSm>`
- `<$DribbbleMd>`
- `<$DribbbleLg>`





## Dribbble

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Dribbble
include('simpleicons-14/D/Dribbble')

' renders the element
Dribbble('Dribbble', 'Dribbble', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dribbble
include('simpleicons-14/D/Dribbble')

' renders the element
Dribbble('Dribbble', 'Dribbble', 'an optional tech label', 'an optional description')
@enduml
```

