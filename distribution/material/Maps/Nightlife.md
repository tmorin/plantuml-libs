# Nightlife


```text
material/Maps/Nightlife
```

```text
include('material/Maps/Nightlife')
```



| Illustration | Nightlife |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/Nightlife.png) | ![illustration for Nightlife](../../material/Maps/Nightlife.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NightlifeXs>`
- `<$NightlifeSm>`
- `<$NightlifeMd>`
- `<$NightlifeLg>`





## Nightlife

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Nightlife
include('material/Maps/Nightlife')

' renders the element
Nightlife('Nightlife', 'Nightlife', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Nightlife
include('material/Maps/Nightlife')

' renders the element
Nightlife('Nightlife', 'Nightlife', 'an optional tech label', 'an optional description')
@enduml
```

