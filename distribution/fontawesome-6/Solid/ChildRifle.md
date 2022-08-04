# ChildRifle


```text
fontawesome-6/Solid/ChildRifle
```

```text
include('fontawesome-6/Solid/ChildRifle')
```



| Illustration | ChildRifle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ChildRifle.png) | ![illustration for ChildRifle](../../fontawesome-6/Solid/ChildRifle.Local.png) |




## ChildRifle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ChildRifle
include('fontawesome-6/Solid/ChildRifle')

' renders the element
ChildRifle('ChildRifle', 'Child Rifle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChildRifle
include('fontawesome-6/Solid/ChildRifle')

' renders the element
ChildRifle('ChildRifle', 'Child Rifle', 'an optional tech label', 'an optional description')
@enduml
```

