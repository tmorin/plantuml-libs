# FitnessCenter


```text
material-4/Places/FitnessCenter
```

```text
include('material-4/Places/FitnessCenter')
```



| Illustration | FitnessCenter |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/FitnessCenter.png) | ![illustration for FitnessCenter](../../material-4/Places/FitnessCenter.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FitnessCenterXs>`
- `<$FitnessCenterSm>`
- `<$FitnessCenterMd>`
- `<$FitnessCenterLg>`





## FitnessCenter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FitnessCenter
include('material-4/Places/FitnessCenter')

' renders the element
FitnessCenter('FitnessCenter', 'Fitness Center', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element FitnessCenter
include('material-4/Places/FitnessCenter')

' renders the element
FitnessCenter('FitnessCenter', 'Fitness Center', 'an optional tech label', 'an optional description')
@enduml
```

