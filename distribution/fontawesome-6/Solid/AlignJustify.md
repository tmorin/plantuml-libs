# AlignJustify


```text
fontawesome-6/Solid/AlignJustify
```

```text
include('fontawesome-6/Solid/AlignJustify')
```



| Illustration | AlignJustify |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/AlignJustify.png) | ![illustration for AlignJustify](../../fontawesome-6/Solid/AlignJustify.Local.png) |




## AlignJustify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element AlignJustify
include('fontawesome-6/Solid/AlignJustify')

' renders the element
AlignJustify('AlignJustify', 'Align Justify', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AlignJustify
include('fontawesome-6/Solid/AlignJustify')

' renders the element
AlignJustify('AlignJustify', 'Align Justify', 'an optional tech label', 'an optional description')
@enduml
```

