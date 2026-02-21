# Huggingface


```text
simpleicons/H/Huggingface
```

```text
include('simpleicons/H/Huggingface')
```



| Illustration | Huggingface |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Huggingface.png) | ![illustration for Huggingface](../../simpleicons/H/Huggingface.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HuggingfaceXs>`
- `<$HuggingfaceSm>`
- `<$HuggingfaceMd>`
- `<$HuggingfaceLg>`





## Huggingface

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Huggingface
include('simpleicons/H/Huggingface')

' renders the element
Huggingface('Huggingface', 'Huggingface', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Huggingface
include('simpleicons/H/Huggingface')

' renders the element
Huggingface('Huggingface', 'Huggingface', 'an optional tech label', 'an optional description')
@enduml
```

