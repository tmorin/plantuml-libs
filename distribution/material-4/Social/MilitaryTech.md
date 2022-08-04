# MilitaryTech


```text
material-4/Social/MilitaryTech
```

```text
include('material-4/Social/MilitaryTech')
```



| Illustration | MilitaryTech |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/MilitaryTech.png) | ![illustration for MilitaryTech](../../material-4/Social/MilitaryTech.Local.png) |




## MilitaryTech

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MilitaryTech
include('material-4/Social/MilitaryTech')

' renders the element
MilitaryTech('MilitaryTech', 'Military Tech', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MilitaryTech
include('material-4/Social/MilitaryTech')

' renders the element
MilitaryTech('MilitaryTech', 'Military Tech', 'an optional tech label', 'an optional description')
@enduml
```

