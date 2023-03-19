# BottleDroplet


```text
fontawesome-6/Solid/BottleDroplet
```

```text
include('fontawesome-6/Solid/BottleDroplet')
```



| Illustration | BottleDroplet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BottleDroplet.png) | ![illustration for BottleDroplet](../../fontawesome-6/Solid/BottleDroplet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BottleDropletXs>`
- `<$BottleDropletSm>`
- `<$BottleDropletMd>`
- `<$BottleDropletLg>`





## BottleDroplet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BottleDroplet
include('fontawesome-6/Solid/BottleDroplet')

' renders the element
BottleDroplet('BottleDroplet', 'Bottle Droplet', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BottleDroplet
include('fontawesome-6/Solid/BottleDroplet')

' renders the element
BottleDroplet('BottleDroplet', 'Bottle Droplet', 'an optional tech label', 'an optional description')
@enduml
```

