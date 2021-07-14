# SportsCricket


```text
material-4/Social/SportsCricket
```

```text
include('material-4/Social/SportsCricket')
```



| Illustration | SportsCricket |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/SportsCricket.png) | ![illustration for SportsCricket](../../material-4/Social/SportsCricket.Local.png) |




## SportsCricket

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SportsCricket
include('material-4/Social/SportsCricket')

' renders the element
SportsCricket('SportsCricket', 'Sports Cricket', 'an optional tech label')
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

' loads the Item which embeds the element SportsCricket
include('material-4/Social/SportsCricket')

' renders the element
SportsCricket('SportsCricket', 'Sports Cricket', 'an optional tech label')
@enduml
```

