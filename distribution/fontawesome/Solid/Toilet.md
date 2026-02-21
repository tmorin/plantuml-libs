# Toilet


```text
fontawesome/Solid/Toilet
```

```text
include('fontawesome/Solid/Toilet')
```



| Illustration | Toilet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Toilet.png) | ![illustration for Toilet](../../fontawesome/Solid/Toilet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ToiletXs>`
- `<$ToiletSm>`
- `<$ToiletMd>`
- `<$ToiletLg>`





## Toilet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Toilet
include('fontawesome/Solid/Toilet')

' renders the element
Toilet('Toilet', 'Toilet', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Toilet
include('fontawesome/Solid/Toilet')

' renders the element
Toilet('Toilet', 'Toilet', 'an optional tech label', 'an optional description')
@enduml
```

