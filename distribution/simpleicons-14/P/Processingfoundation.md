# Processingfoundation


```text
simpleicons-14/P/Processingfoundation
```

```text
include('simpleicons-14/P/Processingfoundation')
```



| Illustration | Processingfoundation |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Processingfoundation.png) | ![illustration for Processingfoundation](../../simpleicons-14/P/Processingfoundation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ProcessingfoundationXs>`
- `<$ProcessingfoundationSm>`
- `<$ProcessingfoundationMd>`
- `<$ProcessingfoundationLg>`





## Processingfoundation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Processingfoundation
include('simpleicons-14/P/Processingfoundation')

' renders the element
Processingfoundation('Processingfoundation', 'Processingfoundation', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Processingfoundation
include('simpleicons-14/P/Processingfoundation')

' renders the element
Processingfoundation('Processingfoundation', 'Processingfoundation', 'an optional tech label', 'an optional description')
@enduml
```

