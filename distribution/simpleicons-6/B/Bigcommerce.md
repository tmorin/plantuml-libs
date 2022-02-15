# Bigcommerce


```text
simpleicons-6/B/Bigcommerce
```

```text
include('simpleicons-6/B/Bigcommerce')
```



| Illustration | Bigcommerce |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Bigcommerce.png) | ![illustration for Bigcommerce](../../simpleicons-6/B/Bigcommerce.Local.png) |




## Bigcommerce

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Bigcommerce
include('simpleicons-6/B/Bigcommerce')

' renders the element
Bigcommerce('Bigcommerce', 'Bigcommerce', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Bigcommerce
include('simpleicons-6/B/Bigcommerce')

' renders the element
Bigcommerce('Bigcommerce', 'Bigcommerce', 'an optional tech label')
@enduml
```

