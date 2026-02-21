# Cat


```text
fontawesome/Solid/Cat
```

```text
include('fontawesome/Solid/Cat')
```



| Illustration | Cat |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Cat.png) | ![illustration for Cat](../../fontawesome/Solid/Cat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CatXs>`
- `<$CatSm>`
- `<$CatMd>`
- `<$CatLg>`





## Cat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Cat
include('fontawesome/Solid/Cat')

' renders the element
Cat('Cat', 'Cat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cat
include('fontawesome/Solid/Cat')

' renders the element
Cat('Cat', 'Cat', 'an optional tech label', 'an optional description')
@enduml
```

