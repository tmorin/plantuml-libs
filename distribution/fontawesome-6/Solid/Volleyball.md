# Volleyball


```text
fontawesome-6/Solid/Volleyball
```

```text
include('fontawesome-6/Solid/Volleyball')
```



| Illustration | Volleyball |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Volleyball.png) | ![illustration for Volleyball](../../fontawesome-6/Solid/Volleyball.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VolleyballXs>`
- `<$VolleyballSm>`
- `<$VolleyballMd>`
- `<$VolleyballLg>`





## Volleyball

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Volleyball
include('fontawesome-6/Solid/Volleyball')

' renders the element
Volleyball('Volleyball', 'Volleyball', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Volleyball
include('fontawesome-6/Solid/Volleyball')

' renders the element
Volleyball('Volleyball', 'Volleyball', 'an optional tech label', 'an optional description')
@enduml
```

