# SportsSoccer


```text
material-4/Social/SportsSoccer
```

```text
include('material-4/Social/SportsSoccer')
```



| Illustration | SportsSoccer |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/SportsSoccer.png) | ![illustration for SportsSoccer](../../material-4/Social/SportsSoccer.Local.png) |




## SportsSoccer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SportsSoccer
include('material-4/Social/SportsSoccer')

' renders the element
SportsSoccer('SportsSoccer', 'Sports Soccer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SportsSoccer
include('material-4/Social/SportsSoccer')

' renders the element
SportsSoccer('SportsSoccer', 'Sports Soccer', 'an optional tech label', 'an optional description')
@enduml
```

