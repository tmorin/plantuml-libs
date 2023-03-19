# PowerInput


```text
material-4/Hardware/PowerInput
```

```text
include('material-4/Hardware/PowerInput')
```



| Illustration | PowerInput |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/PowerInput.png) | ![illustration for PowerInput](../../material-4/Hardware/PowerInput.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PowerInputXs>`
- `<$PowerInputSm>`
- `<$PowerInputMd>`
- `<$PowerInputLg>`





## PowerInput

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PowerInput
include('material-4/Hardware/PowerInput')

' renders the element
PowerInput('PowerInput', 'Power Input', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PowerInput
include('material-4/Hardware/PowerInput')

' renders the element
PowerInput('PowerInput', 'Power Input', 'an optional tech label', 'an optional description')
@enduml
```

