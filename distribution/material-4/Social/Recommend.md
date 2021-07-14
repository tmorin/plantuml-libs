# Recommend


```text
material-4/Social/Recommend
```

```text
include('material-4/Social/Recommend')
```



| Illustration | Recommend |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/Recommend.png) | ![illustration for Recommend](../../material-4/Social/Recommend.Local.png) |




## Recommend

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Recommend
include('material-4/Social/Recommend')

' renders the element
Recommend('Recommend', 'Recommend', 'an optional tech label')
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

' loads the Item which embeds the element Recommend
include('material-4/Social/Recommend')

' renders the element
Recommend('Recommend', 'Recommend', 'an optional tech label')
@enduml
```

