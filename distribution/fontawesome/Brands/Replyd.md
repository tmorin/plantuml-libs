# Replyd


```text
fontawesome/Brands/Replyd
```

```text
include('fontawesome/Brands/Replyd')
```



| Illustration | Replyd |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Replyd.png) | ![illustration for Replyd](../../fontawesome/Brands/Replyd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ReplydXs>`
- `<$ReplydSm>`
- `<$ReplydMd>`
- `<$ReplydLg>`





## Replyd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Replyd
include('fontawesome/Brands/Replyd')

' renders the element
Replyd('Replyd', 'Replyd', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Replyd
include('fontawesome/Brands/Replyd')

' renders the element
Replyd('Replyd', 'Replyd', 'an optional tech label', 'an optional description')
@enduml
```

