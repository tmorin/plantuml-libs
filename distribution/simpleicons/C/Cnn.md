# Cnn


```text
simpleicons/C/Cnn
```

```text
include('simpleicons/C/Cnn')
```



| Illustration | Cnn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Cnn.png) | ![illustration for Cnn](../../simpleicons/C/Cnn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CnnXs>`
- `<$CnnSm>`
- `<$CnnMd>`
- `<$CnnLg>`





## Cnn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cnn
include('simpleicons/C/Cnn')

' renders the element
Cnn('Cnn', 'Cnn', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cnn
include('simpleicons/C/Cnn')

' renders the element
Cnn('Cnn', 'Cnn', 'an optional tech label', 'an optional description')
@enduml
```

