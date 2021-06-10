# VestPatches


```text
fontawesome-5/Solid/VestPatches
```

```text
include('fontawesome-5/Solid/VestPatches')
```



| Illustration | VestPatches |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/VestPatches.png) | ![illustration for VestPatches](../../fontawesome-5/Solid/VestPatches.Local.png) |




## VestPatches

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element VestPatches
include('fontawesome-5/Solid/VestPatches')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element VestPatches
include('fontawesome-5/Solid/VestPatches')

' renders the element
VestPatches('VestPatches', 'Vest Patches', 'an optional tech label')
@enduml
```

