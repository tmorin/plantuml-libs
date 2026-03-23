# MediumM


```text
fontawesome/Brands/MediumM
```

```text
include('fontawesome/Brands/MediumM')
```



| Illustration | MediumM |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/MediumM.png) | ![illustration for MediumM](../../fontawesome/Brands/MediumM.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MediumMXs>`
- `<$MediumMSm>`
- `<$MediumMMd>`
- `<$MediumMLg>`





## MediumM

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MediumM
include('fontawesome/Brands/MediumM')

' renders the element
MediumM('MediumM', 'Medium M', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MediumM
include('fontawesome/Brands/MediumM')

' renders the element
MediumM('MediumM', 'Medium M', 'an optional tech label', 'an optional description')
@enduml
```

