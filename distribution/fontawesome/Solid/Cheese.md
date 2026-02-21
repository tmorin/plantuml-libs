# Cheese


```text
fontawesome/Solid/Cheese
```

```text
include('fontawesome/Solid/Cheese')
```



| Illustration | Cheese |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Cheese.png) | ![illustration for Cheese](../../fontawesome/Solid/Cheese.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CheeseXs>`
- `<$CheeseSm>`
- `<$CheeseMd>`
- `<$CheeseLg>`





## Cheese

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Cheese
include('fontawesome/Solid/Cheese')

' renders the element
Cheese('Cheese', 'Cheese', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cheese
include('fontawesome/Solid/Cheese')

' renders the element
Cheese('Cheese', 'Cheese', 'an optional tech label', 'an optional description')
@enduml
```

