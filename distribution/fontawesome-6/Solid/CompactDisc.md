# CompactDisc


```text
fontawesome-6/Solid/CompactDisc
```

```text
include('fontawesome-6/Solid/CompactDisc')
```



| Illustration | CompactDisc |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CompactDisc.png) | ![illustration for CompactDisc](../../fontawesome-6/Solid/CompactDisc.Local.png) |




## CompactDisc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CompactDisc
include('fontawesome-6/Solid/CompactDisc')

' renders the element
CompactDisc('CompactDisc', 'Compact Disc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CompactDisc
include('fontawesome-6/Solid/CompactDisc')

' renders the element
CompactDisc('CompactDisc', 'Compact Disc', 'an optional tech label', 'an optional description')
@enduml
```

