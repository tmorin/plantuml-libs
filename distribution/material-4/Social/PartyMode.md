# PartyMode


```text
material-4/Social/PartyMode
```

```text
include('material-4/Social/PartyMode')
```



| Illustration | PartyMode |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/PartyMode.png) | ![illustration for PartyMode](../../material-4/Social/PartyMode.Local.png) |




## PartyMode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PartyMode
include('material-4/Social/PartyMode')

' renders the element
PartyMode('PartyMode', 'Party Mode', 'an optional tech label')
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

' loads the Item which embeds the element PartyMode
include('material-4/Social/PartyMode')

' renders the element
PartyMode('PartyMode', 'Party Mode', 'an optional tech label')
@enduml
```

