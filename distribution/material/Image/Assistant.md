# Assistant


```text
material/Image/Assistant
```

```text
include('material/Image/Assistant')
```



| Illustration | Assistant |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/Assistant.png) | ![illustration for Assistant](../../material/Image/Assistant.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AssistantXs>`
- `<$AssistantSm>`
- `<$AssistantMd>`
- `<$AssistantLg>`





## Assistant

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Assistant
include('material/Image/Assistant')

' renders the element
Assistant('Assistant', 'Assistant', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Assistant
include('material/Image/Assistant')

' renders the element
Assistant('Assistant', 'Assistant', 'an optional tech label', 'an optional description')
@enduml
```

