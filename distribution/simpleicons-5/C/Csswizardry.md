# Csswizardry


```text
simpleicons-5/C/Csswizardry
```

```text
include('simpleicons-5/C/Csswizardry')
```



| Illustration | Csswizardry |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Csswizardry.png) | ![illustration for Csswizardry](../../simpleicons-5/C/Csswizardry.Local.png) |




## Csswizardry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Csswizardry
include('simpleicons-5/C/Csswizardry')

' renders the element
Csswizardry('Csswizardry', 'Csswizardry', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Csswizardry
include('simpleicons-5/C/Csswizardry')

' renders the element
Csswizardry('Csswizardry', 'Csswizardry', 'an optional tech label')
@enduml
```

