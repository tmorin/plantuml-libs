# Apachekafka


```text
simpleicons-5/A/Apachekafka
```

```text
include('simpleicons-5/A/Apachekafka')
```



| Illustration | Apachekafka |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Apachekafka.png) | ![illustration for Apachekafka](../../simpleicons-5/A/Apachekafka.Local.png) |




## Apachekafka

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Apachekafka
include('simpleicons-5/A/Apachekafka')

' renders the element
Apachekafka('Apachekafka', 'Apachekafka', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Apachekafka
include('simpleicons-5/A/Apachekafka')

' renders the element
Apachekafka('Apachekafka', 'Apachekafka', 'an optional tech label')
@enduml
```

