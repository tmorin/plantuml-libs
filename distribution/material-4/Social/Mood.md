# Mood


```text
material-4/Social/Mood
```

```text
include('material-4/Social/Mood')
```



| Illustration | Mood |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/Mood.png) | ![illustration for Mood](../../material-4/Social/Mood.Local.png) |




## Mood

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Mood
include('material-4/Social/Mood')

' renders the element
Mood('Mood', 'Mood', 'an optional tech label')
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

' loads the Item which embeds the element Mood
include('material-4/Social/Mood')

' renders the element
Mood('Mood', 'Mood', 'an optional tech label')
@enduml
```

