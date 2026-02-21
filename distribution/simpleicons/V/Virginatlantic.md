# Virginatlantic


```text
simpleicons/V/Virginatlantic
```

```text
include('simpleicons/V/Virginatlantic')
```



| Illustration | Virginatlantic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Virginatlantic.png) | ![illustration for Virginatlantic](../../simpleicons/V/Virginatlantic.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VirginatlanticXs>`
- `<$VirginatlanticSm>`
- `<$VirginatlanticMd>`
- `<$VirginatlanticLg>`





## Virginatlantic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Virginatlantic
include('simpleicons/V/Virginatlantic')

' renders the element
Virginatlantic('Virginatlantic', 'Virginatlantic', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Virginatlantic
include('simpleicons/V/Virginatlantic')

' renders the element
Virginatlantic('Virginatlantic', 'Virginatlantic', 'an optional tech label', 'an optional description')
@enduml
```

