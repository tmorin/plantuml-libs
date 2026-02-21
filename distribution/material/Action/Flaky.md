# Flaky


```text
material/Action/Flaky
```

```text
include('material/Action/Flaky')
```



| Illustration | Flaky |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Flaky.png) | ![illustration for Flaky](../../material/Action/Flaky.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FlakyXs>`
- `<$FlakySm>`
- `<$FlakyMd>`
- `<$FlakyLg>`





## Flaky

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Flaky
include('material/Action/Flaky')

' renders the element
Flaky('Flaky', 'Flaky', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Flaky
include('material/Action/Flaky')

' renders the element
Flaky('Flaky', 'Flaky', 'an optional tech label', 'an optional description')
@enduml
```

