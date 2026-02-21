# Flower


```text
simpleicons/F/Flower
```

```text
include('simpleicons/F/Flower')
```



| Illustration | Flower |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Flower.png) | ![illustration for Flower](../../simpleicons/F/Flower.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FlowerXs>`
- `<$FlowerSm>`
- `<$FlowerMd>`
- `<$FlowerLg>`





## Flower

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Flower
include('simpleicons/F/Flower')

' renders the element
Flower('Flower', 'Flower', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Flower
include('simpleicons/F/Flower')

' renders the element
Flower('Flower', 'Flower', 'an optional tech label', 'an optional description')
@enduml
```

