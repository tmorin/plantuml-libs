# VestPatches


```text
fontawesome-6/Solid/VestPatches
```

```text
include('fontawesome-6/Solid/VestPatches')
```



| Illustration | VestPatches |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/VestPatches.png) | ![illustration for VestPatches](../../fontawesome-6/Solid/VestPatches.Local.png) |




## VestPatches

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element VestPatches
include('fontawesome-6/Solid/VestPatches')

' renders the element
VestPatches('VestPatches', 'Vest Patches', 'an optional tech label')
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

' loads the Item which embeds the element VestPatches
include('fontawesome-6/Solid/VestPatches')

' renders the element
VestPatches('VestPatches', 'Vest Patches', 'an optional tech label')
@enduml
```

