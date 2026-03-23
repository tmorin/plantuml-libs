# MinusCircle


```text
fontawesome/Solid/MinusCircle
```

```text
include('fontawesome/Solid/MinusCircle')
```



| Illustration | MinusCircle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MinusCircle.png) | ![illustration for MinusCircle](../../fontawesome/Solid/MinusCircle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MinusCircleXs>`
- `<$MinusCircleSm>`
- `<$MinusCircleMd>`
- `<$MinusCircleLg>`





## MinusCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MinusCircle
include('fontawesome/Solid/MinusCircle')

' renders the element
MinusCircle('MinusCircle', 'Minus Circle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MinusCircle
include('fontawesome/Solid/MinusCircle')

' renders the element
MinusCircle('MinusCircle', 'Minus Circle', 'an optional tech label', 'an optional description')
@enduml
```

