# HuggingFace


```text
fontawesome/Brands/HuggingFace
```

```text
include('fontawesome/Brands/HuggingFace')
```



| Illustration | HuggingFace |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/HuggingFace.png) | ![illustration for HuggingFace](../../fontawesome/Brands/HuggingFace.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HuggingFaceXs>`
- `<$HuggingFaceSm>`
- `<$HuggingFaceMd>`
- `<$HuggingFaceLg>`





## HuggingFace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HuggingFace
include('fontawesome/Brands/HuggingFace')

' renders the element
HuggingFace('HuggingFace', 'Hugging Face', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element HuggingFace
include('fontawesome/Brands/HuggingFace')

' renders the element
HuggingFace('HuggingFace', 'Hugging Face', 'an optional tech label', 'an optional description')
@enduml
```

