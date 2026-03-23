# Jpy


```text
fontawesome/Solid/Jpy
```

```text
include('fontawesome/Solid/Jpy')
```



| Illustration | Jpy |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Jpy.png) | ![illustration for Jpy](../../fontawesome/Solid/Jpy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JpyXs>`
- `<$JpySm>`
- `<$JpyMd>`
- `<$JpyLg>`





## Jpy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Jpy
include('fontawesome/Solid/Jpy')

' renders the element
Jpy('Jpy', 'Jpy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Jpy
include('fontawesome/Solid/Jpy')

' renders the element
Jpy('Jpy', 'Jpy', 'an optional tech label', 'an optional description')
@enduml
```

